# `dataSlackUser` Submodule <a name="`dataSlackUser` Submodule" id="@skeptools/provider-slack.dataSlackUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSlackUser <a name="DataSlackUser" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/d/user slack_user}.

#### Initializers <a name="Initializers" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer"></a>

```typescript
import { dataSlackUser } from '@skeptools/provider-slack'

new dataSlackUser.DataSlackUser(scope: Construct, id: string, config: DataSlackUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig">DataSlackUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig">DataSlackUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.isConstruct"></a>

```typescript
import { dataSlackUser } from '@skeptools/provider-slack'

dataSlackUser.DataSlackUser.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.has2Fa">has2Fa</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isAdmin">isAdmin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isBot">isBot</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isOwner">isOwner</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.realName">realName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryTypeInput">queryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryValueInput">queryValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryType">queryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryValue">queryValue</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `has2Fa`<sup>Required</sup> <a name="has2Fa" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.has2Fa"></a>

```typescript
public readonly has2Fa: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isAdmin`<sup>Required</sup> <a name="isAdmin" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isAdmin"></a>

```typescript
public readonly isAdmin: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isBot`<sup>Required</sup> <a name="isBot" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isBot"></a>

```typescript
public readonly isBot: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOwner`<sup>Required</sup> <a name="isOwner" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isOwner"></a>

```typescript
public readonly isOwner: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `realName`<sup>Required</sup> <a name="realName" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.realName"></a>

```typescript
public readonly realName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `queryTypeInput`<sup>Optional</sup> <a name="queryTypeInput" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryTypeInput"></a>

```typescript
public readonly queryTypeInput: string;
```

- *Type:* string

---

##### `queryValueInput`<sup>Optional</sup> <a name="queryValueInput" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryValueInput"></a>

```typescript
public readonly queryValueInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

---

##### `queryValue`<sup>Required</sup> <a name="queryValue" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryValue"></a>

```typescript
public readonly queryValue: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSlackUserConfig <a name="DataSlackUserConfig" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.Initializer"></a>

```typescript
import { dataSlackUser } from '@skeptools/provider-slack'

const dataSlackUserConfig: dataSlackUser.DataSlackUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.queryType">queryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_type DataSlackUser#query_type}. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.queryValue">queryValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_value DataSlackUser#query_value}. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#id DataSlackUser#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_type DataSlackUser#query_type}.

---

##### `queryValue`<sup>Required</sup> <a name="queryValue" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.queryValue"></a>

```typescript
public readonly queryValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_value DataSlackUser#query_value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#id DataSlackUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



