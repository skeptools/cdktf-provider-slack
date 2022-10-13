# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Conversation <a name="Conversation" id="@cdktf/provider-slack.conversation.Conversation"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/r/conversation slack_conversation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-slack.conversation.Conversation.Initializer"></a>

```typescript
import { conversation } from '@cdktf/provider-slack'

new conversation.Conversation(scope: Construct, id: string, config: ConversationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-slack.conversation.ConversationConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-slack.conversation.Conversation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-slack.conversation.Conversation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-slack.conversation.Conversation.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-slack.conversation.ConversationConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.resetIsArchived">resetIsArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.resetPurpose">resetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-slack.conversation.Conversation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-slack.conversation.Conversation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-slack.conversation.Conversation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-slack.conversation.Conversation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-slack.conversation.Conversation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-slack.conversation.Conversation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-slack.conversation.Conversation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-slack.conversation.Conversation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-slack.conversation.Conversation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-slack.conversation.Conversation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.conversation.Conversation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-slack.conversation.Conversation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.conversation.Conversation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-slack.conversation.Conversation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.conversation.Conversation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-slack.conversation.Conversation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.conversation.Conversation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-slack.conversation.Conversation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.conversation.Conversation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-slack.conversation.Conversation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.conversation.Conversation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-slack.conversation.Conversation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.conversation.Conversation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-slack.conversation.Conversation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.conversation.Conversation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-slack.conversation.Conversation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.conversation.Conversation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-slack.conversation.Conversation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.conversation.Conversation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-slack.conversation.Conversation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsArchived` <a name="resetIsArchived" id="@cdktf/provider-slack.conversation.Conversation.resetIsArchived"></a>

```typescript
public resetIsArchived(): void
```

##### `resetPurpose` <a name="resetPurpose" id="@cdktf/provider-slack.conversation.Conversation.resetPurpose"></a>

```typescript
public resetPurpose(): void
```

##### `resetTopic` <a name="resetTopic" id="@cdktf/provider-slack.conversation.Conversation.resetTopic"></a>

```typescript
public resetTopic(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-slack.conversation.Conversation.isConstruct"></a>

```typescript
import { conversation } from '@cdktf/provider-slack'

conversation.Conversation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-slack.conversation.Conversation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.created">created</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.isExtShared">isExtShared</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.isOrgShared">isOrgShared</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.isShared">isShared</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.actionOnDestroyInput">actionOnDestroyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.isArchivedInput">isArchivedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.isPrivateInput">isPrivateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.purposeInput">purposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.actionOnDestroy">actionOnDestroy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.isArchived">isArchived</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.isPrivate">isPrivate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.purpose">purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.topic">topic</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-slack.conversation.Conversation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-slack.conversation.Conversation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-slack.conversation.Conversation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-slack.conversation.Conversation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-slack.conversation.Conversation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-slack.conversation.Conversation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-slack.conversation.Conversation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-slack.conversation.Conversation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-slack.conversation.Conversation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-slack.conversation.Conversation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-slack.conversation.Conversation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-slack.conversation.Conversation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-slack.conversation.Conversation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-slack.conversation.Conversation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-slack.conversation.Conversation.property.created"></a>

```typescript
public readonly created: number;
```

- *Type:* number

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-slack.conversation.Conversation.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `isExtShared`<sup>Required</sup> <a name="isExtShared" id="@cdktf/provider-slack.conversation.Conversation.property.isExtShared"></a>

```typescript
public readonly isExtShared: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOrgShared`<sup>Required</sup> <a name="isOrgShared" id="@cdktf/provider-slack.conversation.Conversation.property.isOrgShared"></a>

```typescript
public readonly isOrgShared: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isShared`<sup>Required</sup> <a name="isShared" id="@cdktf/provider-slack.conversation.Conversation.property.isShared"></a>

```typescript
public readonly isShared: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `actionOnDestroyInput`<sup>Optional</sup> <a name="actionOnDestroyInput" id="@cdktf/provider-slack.conversation.Conversation.property.actionOnDestroyInput"></a>

```typescript
public readonly actionOnDestroyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-slack.conversation.Conversation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isArchivedInput`<sup>Optional</sup> <a name="isArchivedInput" id="@cdktf/provider-slack.conversation.Conversation.property.isArchivedInput"></a>

```typescript
public readonly isArchivedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPrivateInput`<sup>Optional</sup> <a name="isPrivateInput" id="@cdktf/provider-slack.conversation.Conversation.property.isPrivateInput"></a>

```typescript
public readonly isPrivateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-slack.conversation.Conversation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@cdktf/provider-slack.conversation.Conversation.property.purposeInput"></a>

```typescript
public readonly purposeInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-slack.conversation.Conversation.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `actionOnDestroy`<sup>Required</sup> <a name="actionOnDestroy" id="@cdktf/provider-slack.conversation.Conversation.property.actionOnDestroy"></a>

```typescript
public readonly actionOnDestroy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-slack.conversation.Conversation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isArchived`<sup>Required</sup> <a name="isArchived" id="@cdktf/provider-slack.conversation.Conversation.property.isArchived"></a>

```typescript
public readonly isArchived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="@cdktf/provider-slack.conversation.Conversation.property.isPrivate"></a>

```typescript
public readonly isPrivate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-slack.conversation.Conversation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-slack.conversation.Conversation.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-slack.conversation.Conversation.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.conversation.Conversation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-slack.conversation.Conversation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataSlackConversation <a name="DataSlackConversation" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/d/conversation slack_conversation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.Initializer"></a>

```typescript
import { dataSlackConversation } from '@cdktf/provider-slack'

new dataSlackConversation.DataSlackConversation(scope: Construct, id: string, config: DataSlackConversationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.resetPurpose">resetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPurpose` <a name="resetPurpose" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.resetPurpose"></a>

```typescript
public resetPurpose(): void
```

##### `resetTopic` <a name="resetTopic" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.resetTopic"></a>

```typescript
public resetTopic(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.isConstruct"></a>

```typescript
import { dataSlackConversation } from '@cdktf/provider-slack'

dataSlackConversation.DataSlackConversation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.created">created</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.isArchived">isArchived</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.isExtShared">isExtShared</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.isOrgShared">isOrgShared</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.isPrivate">isPrivate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.isShared">isShared</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.channelIdInput">channelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.purposeInput">purposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.purpose">purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.topic">topic</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.created"></a>

```typescript
public readonly created: number;
```

- *Type:* number

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `isArchived`<sup>Required</sup> <a name="isArchived" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.isArchived"></a>

```typescript
public readonly isArchived: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isExtShared`<sup>Required</sup> <a name="isExtShared" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.isExtShared"></a>

```typescript
public readonly isExtShared: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOrgShared`<sup>Required</sup> <a name="isOrgShared" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.isOrgShared"></a>

```typescript
public readonly isOrgShared: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.isPrivate"></a>

```typescript
public readonly isPrivate: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isShared`<sup>Required</sup> <a name="isShared" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.isShared"></a>

```typescript
public readonly isShared: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.channelIdInput"></a>

```typescript
public readonly channelIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.purposeInput"></a>

```typescript
public readonly purposeInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataSlackUser <a name="DataSlackUser" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/d/user slack_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.Initializer"></a>

```typescript
import { dataSlackUser } from '@cdktf/provider-slack'

new dataSlackUser.DataSlackUser(scope: Construct, id: string, config: DataSlackUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-slack.dataSlackUser.DataSlackUserConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.isConstruct"></a>

```typescript
import { dataSlackUser } from '@cdktf/provider-slack'

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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.has2Fa">has2Fa</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.isAdmin">isAdmin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.isBot">isBot</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.isOwner">isOwner</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.realName">realName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.queryTypeInput">queryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.queryValueInput">queryValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.queryType">queryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.queryValue">queryValue</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `has2Fa`<sup>Required</sup> <a name="has2Fa" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.has2Fa"></a>

```typescript
public readonly has2Fa: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isAdmin`<sup>Required</sup> <a name="isAdmin" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.isAdmin"></a>

```typescript
public readonly isAdmin: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isBot`<sup>Required</sup> <a name="isBot" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.isBot"></a>

```typescript
public readonly isBot: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOwner`<sup>Required</sup> <a name="isOwner" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.isOwner"></a>

```typescript
public readonly isOwner: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `realName`<sup>Required</sup> <a name="realName" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.realName"></a>

```typescript
public readonly realName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `queryTypeInput`<sup>Optional</sup> <a name="queryTypeInput" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.queryTypeInput"></a>

```typescript
public readonly queryTypeInput: string;
```

- *Type:* string

---

##### `queryValueInput`<sup>Optional</sup> <a name="queryValueInput" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.queryValueInput"></a>

```typescript
public readonly queryValueInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

---

##### `queryValue`<sup>Required</sup> <a name="queryValue" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.queryValue"></a>

```typescript
public readonly queryValue: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-slack.dataSlackUser.DataSlackUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataSlackUsergroup <a name="DataSlackUsergroup" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/d/usergroup slack_usergroup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.Initializer"></a>

```typescript
import { dataSlackUsergroup } from '@cdktf/provider-slack'

new dataSlackUsergroup.DataSlackUsergroup(scope: Construct, id: string, config: DataSlackUsergroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.isConstruct"></a>

```typescript
import { dataSlackUsergroup } from '@cdktf/provider-slack'

dataSlackUsergroup.DataSlackUsergroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.autoType">autoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.handle">handle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.usergroupIdInput">usergroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.usergroupId">usergroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autoType`<sup>Required</sup> <a name="autoType" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.autoType"></a>

```typescript
public readonly autoType: string;
```

- *Type:* string

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.handle"></a>

```typescript
public readonly handle: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `usergroupIdInput`<sup>Optional</sup> <a name="usergroupIdInput" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.usergroupIdInput"></a>

```typescript
public readonly usergroupIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `usergroupId`<sup>Required</sup> <a name="usergroupId" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.usergroupId"></a>

```typescript
public readonly usergroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### SlackProvider <a name="SlackProvider" id="@cdktf/provider-slack.provider.SlackProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack slack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-slack.provider.SlackProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-slack'

new provider.SlackProvider(scope: Construct, id: string, config: SlackProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-slack.provider.SlackProviderConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-slack.provider.SlackProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-slack.provider.SlackProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-slack.provider.SlackProvider.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-slack.provider.SlackProviderConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.resetAlias">resetAlias</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-slack.provider.SlackProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-slack.provider.SlackProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-slack.provider.SlackProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-slack.provider.SlackProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-slack.provider.SlackProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-slack.provider.SlackProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-slack.provider.SlackProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-slack.provider.SlackProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-slack.provider.SlackProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-slack.provider.SlackProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-slack.provider.SlackProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-slack'

provider.SlackProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-slack.provider.SlackProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-slack.provider.SlackProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-slack.provider.SlackProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-slack.provider.SlackProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-slack.provider.SlackProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-slack.provider.SlackProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-slack.provider.SlackProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-slack.provider.SlackProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-slack.provider.SlackProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-slack.provider.SlackProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-slack.provider.SlackProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-slack.provider.SlackProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-slack.provider.SlackProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.provider.SlackProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-slack.provider.SlackProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Usergroup <a name="Usergroup" id="@cdktf/provider-slack.usergroup.Usergroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/r/usergroup slack_usergroup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-slack.usergroup.Usergroup.Initializer"></a>

```typescript
import { usergroup } from '@cdktf/provider-slack'

new usergroup.Usergroup(scope: Construct, id: string, config: UsergroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-slack.usergroup.UsergroupConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-slack.usergroup.Usergroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-slack.usergroup.Usergroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-slack.usergroup.Usergroup.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-slack.usergroup.UsergroupConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.resetAutoType">resetAutoType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-slack.usergroup.Usergroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-slack.usergroup.Usergroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-slack.usergroup.Usergroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-slack.usergroup.Usergroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-slack.usergroup.Usergroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-slack.usergroup.Usergroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-slack.usergroup.Usergroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-slack.usergroup.Usergroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-slack.usergroup.Usergroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroup.Usergroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAutoType` <a name="resetAutoType" id="@cdktf/provider-slack.usergroup.Usergroup.resetAutoType"></a>

```typescript
public resetAutoType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-slack.usergroup.Usergroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-slack.usergroup.Usergroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-slack.usergroup.Usergroup.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-slack.usergroup.Usergroup.isConstruct"></a>

```typescript
import { usergroup } from '@cdktf/provider-slack'

usergroup.Usergroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-slack.usergroup.Usergroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.autoTypeInput">autoTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.handleInput">handleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.autoType">autoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.handle">handle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-slack.usergroup.Usergroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-slack.usergroup.Usergroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-slack.usergroup.Usergroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-slack.usergroup.Usergroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-slack.usergroup.Usergroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-slack.usergroup.Usergroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-slack.usergroup.Usergroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-slack.usergroup.Usergroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-slack.usergroup.Usergroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-slack.usergroup.Usergroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-slack.usergroup.Usergroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-slack.usergroup.Usergroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-slack.usergroup.Usergroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-slack.usergroup.Usergroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-slack.usergroup.Usergroup.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `autoTypeInput`<sup>Optional</sup> <a name="autoTypeInput" id="@cdktf/provider-slack.usergroup.Usergroup.property.autoTypeInput"></a>

```typescript
public readonly autoTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-slack.usergroup.Usergroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `handleInput`<sup>Optional</sup> <a name="handleInput" id="@cdktf/provider-slack.usergroup.Usergroup.property.handleInput"></a>

```typescript
public readonly handleInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-slack.usergroup.Usergroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-slack.usergroup.Usergroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `autoType`<sup>Required</sup> <a name="autoType" id="@cdktf/provider-slack.usergroup.Usergroup.property.autoType"></a>

```typescript
public readonly autoType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-slack.usergroup.Usergroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-slack.usergroup.Usergroup.property.handle"></a>

```typescript
public readonly handle: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-slack.usergroup.Usergroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-slack.usergroup.Usergroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroup.Usergroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-slack.usergroup.Usergroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### UsergroupChannels <a name="UsergroupChannels" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels slack_usergroup_channels}.

#### Initializers <a name="Initializers" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.Initializer"></a>

```typescript
import { usergroupChannels } from '@cdktf/provider-slack'

new usergroupChannels.UsergroupChannels(scope: Construct, id: string, config: UsergroupChannelsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.isConstruct"></a>

```typescript
import { usergroupChannels } from '@cdktf/provider-slack'

usergroupChannels.UsergroupChannels.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.channelsInput">channelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.usergroupIdInput">usergroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.channels">channels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.usergroupId">usergroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `channelsInput`<sup>Optional</sup> <a name="channelsInput" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.channelsInput"></a>

```typescript
public readonly channelsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `usergroupIdInput`<sup>Optional</sup> <a name="usergroupIdInput" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.usergroupIdInput"></a>

```typescript
public readonly usergroupIdInput: string;
```

- *Type:* string

---

##### `channels`<sup>Required</sup> <a name="channels" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.channels"></a>

```typescript
public readonly channels: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `usergroupId`<sup>Required</sup> <a name="usergroupId" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.usergroupId"></a>

```typescript
public readonly usergroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannels.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### UsergroupMembers <a name="UsergroupMembers" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members slack_usergroup_members}.

#### Initializers <a name="Initializers" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.Initializer"></a>

```typescript
import { usergroupMembers } from '@cdktf/provider-slack'

new usergroupMembers.UsergroupMembers(scope: Construct, id: string, config: UsergroupMembersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.isConstruct"></a>

```typescript
import { usergroupMembers } from '@cdktf/provider-slack'

usergroupMembers.UsergroupMembers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.usergroupIdInput">usergroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.usergroupId">usergroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `usergroupIdInput`<sup>Optional</sup> <a name="usergroupIdInput" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.usergroupIdInput"></a>

```typescript
public readonly usergroupIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `usergroupId`<sup>Required</sup> <a name="usergroupId" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.usergroupId"></a>

```typescript
public readonly usergroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConversationConfig <a name="ConversationConfig" id="@cdktf/provider-slack.conversation.ConversationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-slack.conversation.ConversationConfig.Initializer"></a>

```typescript
import { conversation } from '@cdktf/provider-slack'

const conversationConfig: conversation.ConversationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.conversation.ConversationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.ConversationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.ConversationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.ConversationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.ConversationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.ConversationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.ConversationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.conversation.ConversationConfig.property.actionOnDestroy">actionOnDestroy</a></code> | <code>string</code> | Either of none or archive. |
| <code><a href="#@cdktf/provider-slack.conversation.ConversationConfig.property.isPrivate">isPrivate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_private Conversation#is_private}. |
| <code><a href="#@cdktf/provider-slack.conversation.ConversationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#name Conversation#name}. |
| <code><a href="#@cdktf/provider-slack.conversation.ConversationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#id Conversation#id}. |
| <code><a href="#@cdktf/provider-slack.conversation.ConversationConfig.property.isArchived">isArchived</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_archived Conversation#is_archived}. |
| <code><a href="#@cdktf/provider-slack.conversation.ConversationConfig.property.purpose">purpose</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#purpose Conversation#purpose}. |
| <code><a href="#@cdktf/provider-slack.conversation.ConversationConfig.property.topic">topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#topic Conversation#topic}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-slack.conversation.ConversationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-slack.conversation.ConversationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-slack.conversation.ConversationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-slack.conversation.ConversationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-slack.conversation.ConversationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-slack.conversation.ConversationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-slack.conversation.ConversationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionOnDestroy`<sup>Required</sup> <a name="actionOnDestroy" id="@cdktf/provider-slack.conversation.ConversationConfig.property.actionOnDestroy"></a>

```typescript
public readonly actionOnDestroy: string;
```

- *Type:* string

Either of none or archive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#action_on_destroy Conversation#action_on_destroy}

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="@cdktf/provider-slack.conversation.ConversationConfig.property.isPrivate"></a>

```typescript
public readonly isPrivate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_private Conversation#is_private}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-slack.conversation.ConversationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#name Conversation#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-slack.conversation.ConversationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#id Conversation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isArchived`<sup>Optional</sup> <a name="isArchived" id="@cdktf/provider-slack.conversation.ConversationConfig.property.isArchived"></a>

```typescript
public readonly isArchived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_archived Conversation#is_archived}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-slack.conversation.ConversationConfig.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#purpose Conversation#purpose}.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-slack.conversation.ConversationConfig.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#topic Conversation#topic}.

---

### DataSlackConversationConfig <a name="DataSlackConversationConfig" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.Initializer"></a>

```typescript
import { dataSlackConversation } from '@cdktf/provider-slack'

const dataSlackConversationConfig: dataSlackConversation.DataSlackConversationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.channelId">channelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#channel_id DataSlackConversation#channel_id}. |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#id DataSlackConversation#id}. |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.purpose">purpose</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#purpose DataSlackConversation#purpose}. |
| <code><a href="#@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.topic">topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#topic DataSlackConversation#topic}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#channel_id DataSlackConversation#channel_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#id DataSlackConversation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#purpose DataSlackConversation#purpose}.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#topic DataSlackConversation#topic}.

---

### DataSlackUserConfig <a name="DataSlackUserConfig" id="@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.Initializer"></a>

```typescript
import { dataSlackUser } from '@cdktf/provider-slack'

const dataSlackUserConfig: dataSlackUser.DataSlackUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.queryType">queryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_type DataSlackUser#query_type}. |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.queryValue">queryValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_value DataSlackUser#query_value}. |
| <code><a href="#@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#id DataSlackUser#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_type DataSlackUser#query_type}.

---

##### `queryValue`<sup>Required</sup> <a name="queryValue" id="@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.queryValue"></a>

```typescript
public readonly queryValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_value DataSlackUser#query_value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-slack.dataSlackUser.DataSlackUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#id DataSlackUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataSlackUsergroupConfig <a name="DataSlackUsergroupConfig" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.Initializer"></a>

```typescript
import { dataSlackUsergroup } from '@cdktf/provider-slack'

const dataSlackUsergroupConfig: dataSlackUsergroup.DataSlackUsergroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.usergroupId">usergroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/usergroup#usergroup_id DataSlackUsergroup#usergroup_id}. |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/usergroup#description DataSlackUsergroup#description}. |
| <code><a href="#@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/usergroup#id DataSlackUsergroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `usergroupId`<sup>Required</sup> <a name="usergroupId" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.usergroupId"></a>

```typescript
public readonly usergroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/usergroup#usergroup_id DataSlackUsergroup#usergroup_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/usergroup#description DataSlackUsergroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/usergroup#id DataSlackUsergroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SlackProviderConfig <a name="SlackProviderConfig" id="@cdktf/provider-slack.provider.SlackProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-slack.provider.SlackProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-slack'

const slackProviderConfig: provider.SlackProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.provider.SlackProviderConfig.property.token">token</a></code> | <code>string</code> | The OAuth token used to connect to Slack. |
| <code><a href="#@cdktf/provider-slack.provider.SlackProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-slack.provider.SlackProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The OAuth token used to connect to Slack.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack#token SlackProvider#token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-slack.provider.SlackProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack#alias SlackProvider#alias}

---

### UsergroupChannelsConfig <a name="UsergroupChannelsConfig" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.Initializer"></a>

```typescript
import { usergroupChannels } from '@cdktf/provider-slack'

const usergroupChannelsConfig: usergroupChannels.UsergroupChannelsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.channels">channels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels#channels UsergroupChannels#channels}. |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.usergroupId">usergroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels#usergroup_id UsergroupChannels#usergroup_id}. |
| <code><a href="#@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels#id UsergroupChannels#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `channels`<sup>Required</sup> <a name="channels" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.channels"></a>

```typescript
public readonly channels: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels#channels UsergroupChannels#channels}.

---

##### `usergroupId`<sup>Required</sup> <a name="usergroupId" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.usergroupId"></a>

```typescript
public readonly usergroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels#usergroup_id UsergroupChannels#usergroup_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-slack.usergroupChannels.UsergroupChannelsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels#id UsergroupChannels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### UsergroupConfig <a name="UsergroupConfig" id="@cdktf/provider-slack.usergroup.UsergroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-slack.usergroup.UsergroupConfig.Initializer"></a>

```typescript
import { usergroup } from '@cdktf/provider-slack'

const usergroupConfig: usergroup.UsergroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroup.UsergroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.UsergroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.UsergroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.UsergroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.UsergroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.UsergroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.UsergroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroup.UsergroupConfig.property.handle">handle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup#handle Usergroup#handle}. |
| <code><a href="#@cdktf/provider-slack.usergroup.UsergroupConfig.property.autoType">autoType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup#auto_type Usergroup#auto_type}. |
| <code><a href="#@cdktf/provider-slack.usergroup.UsergroupConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup#description Usergroup#description}. |
| <code><a href="#@cdktf/provider-slack.usergroup.UsergroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup#id Usergroup#id}. |
| <code><a href="#@cdktf/provider-slack.usergroup.UsergroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup#name Usergroup#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-slack.usergroup.UsergroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-slack.usergroup.UsergroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-slack.usergroup.UsergroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-slack.usergroup.UsergroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-slack.usergroup.UsergroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-slack.usergroup.UsergroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-slack.usergroup.UsergroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-slack.usergroup.UsergroupConfig.property.handle"></a>

```typescript
public readonly handle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup#handle Usergroup#handle}.

---

##### `autoType`<sup>Optional</sup> <a name="autoType" id="@cdktf/provider-slack.usergroup.UsergroupConfig.property.autoType"></a>

```typescript
public readonly autoType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup#auto_type Usergroup#auto_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-slack.usergroup.UsergroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup#description Usergroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-slack.usergroup.UsergroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup#id Usergroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-slack.usergroup.UsergroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup#name Usergroup#name}.

---

### UsergroupMembersConfig <a name="UsergroupMembersConfig" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.Initializer"></a>

```typescript
import { usergroupMembers } from '@cdktf/provider-slack'

const usergroupMembersConfig: usergroupMembers.UsergroupMembersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#members UsergroupMembers#members}. |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.usergroupId">usergroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#usergroup_id UsergroupMembers#usergroup_id}. |
| <code><a href="#@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#id UsergroupMembers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#members UsergroupMembers#members}.

---

##### `usergroupId`<sup>Required</sup> <a name="usergroupId" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.usergroupId"></a>

```typescript
public readonly usergroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#usergroup_id UsergroupMembers#usergroup_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-slack.usergroupMembers.UsergroupMembersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#id UsergroupMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



