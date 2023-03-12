# `conversation` Submodule <a name="`conversation` Submodule" id="@skeptools/provider-slack.conversation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Conversation <a name="Conversation" id="@skeptools/provider-slack.conversation.Conversation"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/r/conversation slack_conversation}.

#### Initializers <a name="Initializers" id="@skeptools/provider-slack.conversation.Conversation.Initializer"></a>

```typescript
import { conversation } from '@skeptools/provider-slack'

new conversation.Conversation(scope: Construct, id: string, config: ConversationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig">ConversationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-slack.conversation.ConversationConfig">ConversationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetIsArchived">resetIsArchived</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetPurpose">resetPurpose</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-slack.conversation.Conversation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-slack.conversation.Conversation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-slack.conversation.Conversation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-slack.conversation.Conversation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-slack.conversation.Conversation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-slack.conversation.Conversation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-slack.conversation.Conversation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-slack.conversation.Conversation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-slack.conversation.Conversation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-slack.conversation.Conversation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-slack.conversation.Conversation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-slack.conversation.Conversation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-slack.conversation.Conversation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-slack.conversation.Conversation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-slack.conversation.Conversation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-slack.conversation.Conversation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@skeptools/provider-slack.conversation.Conversation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsArchived` <a name="resetIsArchived" id="@skeptools/provider-slack.conversation.Conversation.resetIsArchived"></a>

```typescript
public resetIsArchived(): void
```

##### `resetPurpose` <a name="resetPurpose" id="@skeptools/provider-slack.conversation.Conversation.resetPurpose"></a>

```typescript
public resetPurpose(): void
```

##### `resetTopic` <a name="resetTopic" id="@skeptools/provider-slack.conversation.Conversation.resetTopic"></a>

```typescript
public resetTopic(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-slack.conversation.Conversation.isConstruct"></a>

```typescript
import { conversation } from '@skeptools/provider-slack'

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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-slack.conversation.Conversation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.created">created</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isExtShared">isExtShared</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isOrgShared">isOrgShared</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isShared">isShared</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.actionOnDestroyInput">actionOnDestroyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isArchivedInput">isArchivedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isPrivateInput">isPrivateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.purposeInput">purposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.actionOnDestroy">actionOnDestroy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isArchived">isArchived</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isPrivate">isPrivate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.purpose">purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.topic">topic</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-slack.conversation.Conversation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-slack.conversation.Conversation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-slack.conversation.Conversation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-slack.conversation.Conversation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-slack.conversation.Conversation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-slack.conversation.Conversation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-slack.conversation.Conversation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-slack.conversation.Conversation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.conversation.Conversation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-slack.conversation.Conversation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-slack.conversation.Conversation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.conversation.Conversation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.conversation.Conversation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-slack.conversation.Conversation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `created`<sup>Required</sup> <a name="created" id="@skeptools/provider-slack.conversation.Conversation.property.created"></a>

```typescript
public readonly created: number;
```

- *Type:* number

---

##### `creator`<sup>Required</sup> <a name="creator" id="@skeptools/provider-slack.conversation.Conversation.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `isExtShared`<sup>Required</sup> <a name="isExtShared" id="@skeptools/provider-slack.conversation.Conversation.property.isExtShared"></a>

```typescript
public readonly isExtShared: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOrgShared`<sup>Required</sup> <a name="isOrgShared" id="@skeptools/provider-slack.conversation.Conversation.property.isOrgShared"></a>

```typescript
public readonly isOrgShared: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isShared`<sup>Required</sup> <a name="isShared" id="@skeptools/provider-slack.conversation.Conversation.property.isShared"></a>

```typescript
public readonly isShared: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `actionOnDestroyInput`<sup>Optional</sup> <a name="actionOnDestroyInput" id="@skeptools/provider-slack.conversation.Conversation.property.actionOnDestroyInput"></a>

```typescript
public readonly actionOnDestroyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-slack.conversation.Conversation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isArchivedInput`<sup>Optional</sup> <a name="isArchivedInput" id="@skeptools/provider-slack.conversation.Conversation.property.isArchivedInput"></a>

```typescript
public readonly isArchivedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPrivateInput`<sup>Optional</sup> <a name="isPrivateInput" id="@skeptools/provider-slack.conversation.Conversation.property.isPrivateInput"></a>

```typescript
public readonly isPrivateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@skeptools/provider-slack.conversation.Conversation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@skeptools/provider-slack.conversation.Conversation.property.purposeInput"></a>

```typescript
public readonly purposeInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@skeptools/provider-slack.conversation.Conversation.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `actionOnDestroy`<sup>Required</sup> <a name="actionOnDestroy" id="@skeptools/provider-slack.conversation.Conversation.property.actionOnDestroy"></a>

```typescript
public readonly actionOnDestroy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.conversation.Conversation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isArchived`<sup>Required</sup> <a name="isArchived" id="@skeptools/provider-slack.conversation.Conversation.property.isArchived"></a>

```typescript
public readonly isArchived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="@skeptools/provider-slack.conversation.Conversation.property.isPrivate"></a>

```typescript
public readonly isPrivate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-slack.conversation.Conversation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@skeptools/provider-slack.conversation.Conversation.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@skeptools/provider-slack.conversation.Conversation.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-slack.conversation.Conversation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConversationConfig <a name="ConversationConfig" id="@skeptools/provider-slack.conversation.ConversationConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-slack.conversation.ConversationConfig.Initializer"></a>

```typescript
import { conversation } from '@skeptools/provider-slack'

const conversationConfig: conversation.ConversationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.actionOnDestroy">actionOnDestroy</a></code> | <code>string</code> | Either of none or archive. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.isPrivate">isPrivate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_private Conversation#is_private}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#name Conversation#name}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#id Conversation#id}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.isArchived">isArchived</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_archived Conversation#is_archived}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.purpose">purpose</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#purpose Conversation#purpose}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.topic">topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#topic Conversation#topic}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-slack.conversation.ConversationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.conversation.ConversationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-slack.conversation.ConversationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-slack.conversation.ConversationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.conversation.ConversationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.conversation.ConversationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-slack.conversation.ConversationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionOnDestroy`<sup>Required</sup> <a name="actionOnDestroy" id="@skeptools/provider-slack.conversation.ConversationConfig.property.actionOnDestroy"></a>

```typescript
public readonly actionOnDestroy: string;
```

- *Type:* string

Either of none or archive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#action_on_destroy Conversation#action_on_destroy}

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="@skeptools/provider-slack.conversation.ConversationConfig.property.isPrivate"></a>

```typescript
public readonly isPrivate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_private Conversation#is_private}.

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-slack.conversation.ConversationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#name Conversation#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-slack.conversation.ConversationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#id Conversation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isArchived`<sup>Optional</sup> <a name="isArchived" id="@skeptools/provider-slack.conversation.ConversationConfig.property.isArchived"></a>

```typescript
public readonly isArchived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_archived Conversation#is_archived}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@skeptools/provider-slack.conversation.ConversationConfig.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#purpose Conversation#purpose}.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@skeptools/provider-slack.conversation.ConversationConfig.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#topic Conversation#topic}.

---



